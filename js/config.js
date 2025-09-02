/**
 * config.js - Configurações do quiz
 * 
 * Este arquivo contém as configurações personalizáveis do quiz.
 * Altere estas configurações para adaptar o quiz à sua matéria.
 */

// Configuração do quiz
const quizConfig = {
    // Título principal que aparece na tela de login
    title: "Quiz DM1, DM2, IRA e IVAS",
    
    // Nome do localStorage para salvar os dados do usuário
    storageKey: "quizMultiData",
    
    /**
     * Lista de módulos disponíveis
     *
     * Cada módulo representa um tema distinto. As questões estão
     * armazenadas em arquivos JSON (sem a extensão .json) na raiz do
     * diretório do quiz. Aqui definimos quatro módulos: DM1,
     * DM2, Insuficiência Renal Aguda (IRA) e Infecções das Vias Aéreas
     * Superiores (IVAS). Ajuste ou expanda esta lista para adicionar
     * mais temas, conforme necessário.
     */
    modules: [
        {
            id: "dm1",
            name: "Diabetes Mellitus Tipo 1 (DM1)",
            file: "questoes_dm1"
        },
        {
            id: "dm2",
            name: "Diabetes Mellitus Tipo 2 (DM2)",
            file: "questoes_dm2"
        },
        {
            id: "ira",
            name: "Insuficiência Renal Aguda (IRA)",
            file: "questoes_ira"
        },
        {
            id: "ivas",
            name: "Infecções das Vias Aéreas Superiores (IVAS)",
            file: "questoes_ivas"
        }
    ]
};
