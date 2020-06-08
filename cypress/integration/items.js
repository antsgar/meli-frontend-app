const search = "iPhone";

describe("Items page", () => {
    beforeEach(() => {
        cy.visit(`/items?search=${search}`);
    });

    it("should display search bar showing search query", () => {
        cy.get("[data-test=search-bar]").should("have.length", 1);
        cy.get("[data-test=search-box]").should("have.value", search);
    });

    it("should display search results", () => {
        cy.get("[data-test=result-item]").should("have.length", 4);
    });

    it("should allow user to select a result", () => {
        cy.get("[data-test=result-item]")
            .first()
            .should("have.attr", "data-id")
            .then((itemId) => {
                cy.get("[data-test=result-item]").first().click();
                cy.url().should(
                    "eq",
                    `${Cypress.config().baseUrl}/items/${itemId}`
                );
            });
    });

    it("should take user to home when clicking logo", () => {
        cy.get("[data-test=logo]").click();
        cy.url().should(
            "eq",
            `${Cypress.config().baseUrl}/`
        );
    });
});
