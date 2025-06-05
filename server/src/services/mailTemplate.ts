export function mailTemplate(userName: string, nomePaciente: string) {
  return `
    <div style="max-width: 600px; margin: 0 auto; padding: 24px; background-color: #f9fafb; font-family: Arial, sans-serif; color: #333; border-radius: 12px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); text-align: center;">
      
      <img 
        src="https://i.imgur.com/pypINKD.png" 
        alt="Logo da Clínica" 
        style="width: 120px; margin-bottom: 20px;" 
      />

      <h1 style="font-size: 24px; color: #16a34a;">Olá, ${userName}! 👋</h1>

      <p style="font-size: 16px; margin-top: 12px;">
        A consulta de <strong>${nomePaciente}</strong> foi realizada com sucesso!
      </p>

      <p style="font-size: 16px; margin-top: 12px;">
        Obrigado por confiar em nossa clínica veterinária. 🐾
      </p>

      <hr style="margin: 24px 0; border: none; border-top: 1px solid #ddd;" />

      <p style="font-size: 14px; color: #666;">
        Este é um e-mail automático. Não é necessário respondê-lo.
      </p>
    </div>
  `;
}
