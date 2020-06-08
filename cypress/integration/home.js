const search = "iPhone";

describe("Home page", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should display search bar", () => {
        cy.get("[data-test=search-bar]").should("have.length", 1);
    });

    it("should allow user to search", () => {
        cy.get("[data-test=search-box]").type("iPhone");
        cy.get("[data-test=search-icon]").click();
        cy.url().should(
            "eq",
            `${Cypress.config().baseUrl}/items?search=${search}`
        );
    });
});
