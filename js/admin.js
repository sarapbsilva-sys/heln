module.exports = async function handler(req, res) {

    /* ==========================================
       SOMENTE POST
       ========================================== */

    if (req.method !== "POST") {

        return res.status(405).json({

            success: false,

            message:
                "Método não permitido."

        });

    }


    try {

        /* ==========================================
           URL DO APPS SCRIPT
           ========================================== */

        const APPS_SCRIPT_URL =
            process.env.APPS_SCRIPT_URL;


        if (!APPS_SCRIPT_URL) {

            return res.status(500).json({

                success: false,

                message:
                    "APPS_SCRIPT_URL não configurada na Vercel."

            });

        }


        /* ==========================================
           DADOS RECEBIDOS
           ========================================== */

        const dados =
            req.body || {};


        console.log(
            "Admin action:",
            dados.action
        );


        /* ==========================================
           ENVIA PARA APPS SCRIPT
           ========================================== */

        const respostaGoogle =
            await fetch(
                APPS_SCRIPT_URL,
                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "text/plain;charset=utf-8"

                    },

                    body:
                        JSON.stringify({

                            scope: "admin",

                            ...dados

                        }),

                    redirect: "follow"

                }
            );


        const texto =
            await respostaGoogle.text();


        console.log(
            "Status Apps Script:",
            respostaGoogle.status
        );


        console.log(
            "Resposta Apps Script:",
            texto.substring(
                0,
                500
            )
        );


        /* ==========================================
           TENTA CONVERTER PARA JSON
           ========================================== */

        let resultado;


        try {

            resultado =
                JSON.parse(
                    texto
                );

        } catch (erroJson) {

            return res.status(500).json({

                success: false,

                message:
                    "O Apps Script retornou uma resposta inválida.",

                googleResponse:
                    texto.substring(
                        0,
                        300
                    )

            });

        }


        /* ==========================================
           ERRO DO APPS SCRIPT
           ========================================== */

        if (
            !respostaGoogle.ok ||
            resultado.success === false
        ) {

            return res.status(400).json({

                success: false,

                message:
                    resultado.message ||
                    "Erro no Apps Script."

            });

        }


        /* ==========================================
           SUCESSO
           ========================================== */

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
                "Erro interno na API administrativa."

        });

    }

};