const itemId = "MLA860381954";

describe("Item page", () => {
    beforeEach(() => {
        cy.visit(`/items/${itemId}`);
    });

    it("should display search bar", () => {
        cy.get("[data-test=search-bar]").should("have.length", 1);
        cy.get("[data-test=search-box]").should("have.value", "");
    });

    it("should display item detail", () => {
        cy.get("[data-test=item-detail]").should("have.length", 1);
    });

    it("should take user to home when clicking logo", () => {
        cy.get("[data-test=logo]").click();
        cy.url().should(
            "eq",
            `${Cypress.config().baseUrl}/`
        );
    });
});
