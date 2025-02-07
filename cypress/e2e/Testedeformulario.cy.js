describe('Adicionar Nova Conta de Usuário no OrangeHRM', () => {
  before(() => {
    // Visita a página de login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Faz login como administrador
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    // Verifica se o login foi bem-sucedido
    cy.url().should('include', '/dashboard');
  });

  it('Deve adicionar uma nova conta de usuário com sucesso', () => {
    // Navega até a seção de administração
    cy.get('.oxd-sidepanel-body').contains('Admin').click();

    // Clica no botão "Add" para abrir o formulário de adição de usuário
    cy.get('button').contains('Add').click();

    // Preenche o campo "User Role"
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click(); // Abre o dropdown de User Role
    cy.get('.oxd-select-dropdown').contains('Admin').click(); // Seleciona "Admin"

    // Preenche o campo "Employee Name"
    cy.get('input[placeholder="Type for hints..."]').type('joker'); // Digita o nome do funcionário
    cy.get('.oxd-autocomplete-dropdown').contains('joker john selvam').click(); // Seleciona o nome completo

    // Preenche o campo "Status"
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click(); // Abre o dropdown de Status
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .Enabled').contains('Enabled').click(); // Seleciona "Enabled"

    // Preenche o campo "Username"
    cy.get('input[class*="oxd-input"][placeholder="Type for hints..."]').eq(1).type('joker.selvam');

    // Preenche o campo "Password"
    cy.get('input[type="password"]').eq(0).type('SenhaForte123!');

    // Preenche o campo "Confirm Password"
    cy.get('input[type="password"]').eq(1).type('SenhaForte123!');

    // Clica no botão "Save" para salvar o novo usuário
    cy.get('button[type="submit"]').click();

    // Verifica se a mensagem de sucesso é exibida
    cy.get('.oxd-toast').should('be.visible').and('contain', 'Successfully Saved');
  });
});