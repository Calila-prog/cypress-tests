describe('Teste de Login',() =>{
  it('Deve fazer login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/'); // Substitua pela URL do seu formulário de login

    // Preenche o campo de e-mail
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');

    // Preenche o campo de senha
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');

    // Clica no botão de Entrar
    cy.get('.oxd-button').click();

    // Verifica se o login foi bem-sucedido
    cy.url().should('include', 'dashboard'); // Verifica se foi redirecionado para a página de dashboard
  });
});
