module.exports = async function handler(req, res) {

    /* =====================================================
       CORS / OPTIONS
       ===================================================== */

    res.setHeader(
        "Access-Control-Allow-Origin",
        "*"
    );

    res.setHeader(
        "Access-Control-Allow-Methods",
        "POST, OPTIONS"
    );

    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type"
    );


    /* =====================================================
       PREFLIGHT
       ===================================================== */

    if (req.method === "OPTIONS") {

        return res
            .status(204)
            .end();
    }


    /* =====================================================
       SOMENTE POST
       ===================================================== */

    if (req.method !== "POST") {

        return res.status(405).json({

            success: false,

            message:
                `Método ${req.method} não permitido.`

        });
    }


    try {

        /* =================================================
           APPS SCRIPT
           ================================================= */

        const APPS_SCRIPT_URL =
            process.env.APPS_SCRIPT_URL;


        if (!APPS_SCRIPT_URL) {

            return res.status(500).json({

                success: false,

                message:
                    "APPS_SCRIPT_URL não configurada na Vercel."

            });
        }


        /* =================================================
           BODY
           ================================================= */

        const dados =
            req.body || {};


        console.log(
            "ADMIN REQUEST:",
            dados
        );


        /* =================================================
           ENVIA PARA GOOGLE APPS SCRIPT
           ================================================= */

        const respostaGoogle =
            await fetch(
                APPS_SCRIPT_URL,
                {

                    method:
                        "POST",

                    headers: {

                        "Content-Type":
                            "text/plain;charset=utf-8"

                    },

                    body:
                        JSON.stringify({

                            scope:
                                "admin",

                            ...dados

                        }),

                    redirect:
                        "follow"

                }
            );


        const texto =
            await respostaGoogle.text();


        console.log(
            "STATUS GOOGLE:",
            respostaGoogle.status
        );


        console.log(
            "RESPOSTA GOOGLE:",
            texto.substring(
                0,
                1000
            )
        );


        /* =================================================
           CONVERTE RESPOSTA
           ================================================= */

        let resultado;


        try {

            resultado =
                JSON.parse(
                    texto
                );

        } catch (erro) {

            return res.status(502).json({

                success: false,

                message:
                    "O Google Apps Script não retornou JSON.",

                googleStatus:
                    respostaGoogle.status,

                googleResponse:
                    texto.substring(
                        0,
                        500
                    )

            });
        }


        /* =================================================
           ERRO GOOGLE
           ================================================= */

        if (
            !respostaGoogle.ok ||
            resultado.success === false
        ) {

            return res.status(400).json({

                success: false,

                message:
                    resultado.message ||
                    "O Apps Script retornou um erro.",

                googleStatus:
                    respostaGoogle.status

            });
        }


        /* =================================================
           SUCESSO
           ================================================= */

        return res
            .status(200)
            .json(
                resultado
            );


    } catch (erro) {

        console.error(
            "ERRO /api/admin:",
            erro
        );


        return res.status(500).json({

            success: false,

            message:
                erro.message ||
                "Erro interno da API administrativa."

        });
    }
};