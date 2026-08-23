module.exports = async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Método não permitido."
        });
    }

    try {

        const APPS_SCRIPT_URL =
            "https://script.google.com/macros/s/AKfycbwrL3Z3dGBIsYHOOd6urjl9-UlTAwBz4Cnvbw7C5-0fI_zZcR5mVgEZPN7phAp3YJ92/exec";


        console.log("Dados recebidos:", req.body);


        const respostaGoogle = await fetch(APPS_SCRIPT_URL, {

            method: "POST",

            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },

            body: JSON.stringify(req.body),

            redirect: "follow"
        });


        console.log(
            "Status Apps Script:",
            respostaGoogle.status
        );


        const texto = await respostaGoogle.text();


        console.log(
            "Resposta Apps Script:",
            texto.substring(0, 500)
        );


        /* ==========================================
           APPS SCRIPT RETORNOU ERRO HTTP
           ========================================== */

        if (!respostaGoogle.ok) {

            return res.status(500).json({

                success: false,

                message:
                    "O Google Apps Script retornou erro.",

                googleStatus:
                    respostaGoogle.status,

                googleResponse:
                    texto.substring(0, 300)

            });

        }


        /* ==========================================
           TENTA CONVERTER PARA JSON
           ========================================== */

        let resultado;

        try {

            resultado = JSON.parse(texto);

        } catch (erroJson) {

            return res.status(500).json({

                success: false,

                message:
                    "O Apps Script não retornou JSON.",

                googleStatus:
                    respostaGoogle.status,

                googleResponse:
                    texto.substring(0, 300)

            });

        }


        /* ==========================================
           APPS SCRIPT RESPONDEU success:false
           ========================================== */

        if (!resultado.success) {

            return res.status(500).json({

                success: false,

                message:
                    resultado.message ||
                    "Erro ao salvar no Google Sheets."

            });

        }


        /* ==========================================
           SUCESSO
           ========================================== */

        return res.status(200).json({

            success: true,

            message:
                "Presença registrada com sucesso!"

        });


    } catch (erro) {

        console.error(
            "ERRO API PRESENCA:",
            erro
        );


        return res.status(500).json({

            success: false,

            message:
                "Erro interno na API.",

            error:
                erro.message || String(erro)

        });

    }

};