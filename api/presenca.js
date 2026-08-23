const { google } = require("googleapis");

module.exports = async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Método não permitido."
        });
    }

    try {

        /* ==========================================
           VERIFICA VARIÁVEIS DA VERCEL
           ========================================== */

        const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
        const privateKey = process.env.GOOGLE_PRIVATE_KEY;
        const spreadsheetId = process.env.GOOGLE_SHEET_ID;

        if (!email) {
            return res.status(500).json({
                success: false,
                message: "Configuração ausente.",
                error: "GOOGLE_SERVICE_ACCOUNT_EMAIL não encontrada na Vercel."
            });
        }

        if (!privateKey) {
            return res.status(500).json({
                success: false,
                message: "Configuração ausente.",
                error: "GOOGLE_PRIVATE_KEY não encontrada na Vercel."
            });
        }

        if (!spreadsheetId) {
            return res.status(500).json({
                success: false,
                message: "Configuração ausente.",
                error: "GOOGLE_SHEET_ID não encontrada na Vercel."
            });
        }


        /* ==========================================
           DADOS RECEBIDOS
           ========================================== */

        const {
            meta,
            treinamento,
            nome,
            matricula,
            profissao,
            setor,
            turno,
            notaQuiz,
            totalQuestoes,
            avaliacao,
            observacao
        } = req.body || {};


        if (!nome || !matricula || !profissao || !setor || !turno) {
            return res.status(400).json({
                success: false,
                message: "Preencha todos os campos obrigatórios."
            });
        }


        /* ==========================================
           GOOGLE AUTH
           ========================================== */

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: email,

                private_key: privateKey
                    .replace(/\\n/g, "\n")
            },

            scopes: [
                "https://www.googleapis.com/auth/spreadsheets"
            ]
        });


        const sheets = google.sheets({
            version: "v4",
            auth
        });


        /* ==========================================
           ENVIA PARA O GOOGLE SHEETS
           ========================================== */

        await sheets.spreadsheets.values.append({

            spreadsheetId,

            range: "PRESENCAS!A:L",

            valueInputOption: "USER_ENTERED",

            requestBody: {
                values: [[

                    new Date().toLocaleString("pt-BR", {
                        timeZone: "America/Sao_Paulo"
                    }),

                    meta || "",
                    treinamento || "",
                    nome,
                    matricula,
                    profissao,
                    setor,
                    turno,
                    notaQuiz ?? "",
                    totalQuestoes ?? "",
                    avaliacao || "",
                    observacao || ""

                ]]
            }
        });


        return res.status(200).json({
            success: true,
            message: "Presença registrada com sucesso!"
        });


    } catch (error) {

        console.error("ERRO GOOGLE:", error);

        return res.status(500).json({
            success: false,
            message: "Erro ao registrar presença.",
            error: error.message,
            code: error.code || null
        });
    }
};