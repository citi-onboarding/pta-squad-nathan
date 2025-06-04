import { MailHandler } from "../services";
import { Request, Response } from "express";

export async function sendMail(req: Request, res: Response) {
    try{
        const { userName, userEmail, subjectText } = req.body;

        const emailConfig = {
            userName,
            userEmail,
            subjectText,
            html: `<h1>Olá, ${userName}</h1>`
        }

        const mailResponse = await MailHandler(emailConfig);

        if (mailResponse) {
            res.status(200).json({ message: "E-mail enviado com sucesso." });
        } else {
            res.status(500).json({ message: "Erro ao enviar e-mail." });
        }

    } catch(error) {
        console.log(error);
        res.status(500).json({ message: "Erro ao enviar e-mail." });
    }
}
