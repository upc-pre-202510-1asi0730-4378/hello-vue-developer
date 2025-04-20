/**
 * Developer entity
 * This class represents a developer with a first name and last name.
 * It provides methods to get the full name and check if the developer is valid.
 */
export class Developer {
    #firstName;
    #lastName;

    /**
     * Constructor for the Developer class
     * @param firstName { string | null } The first name of the developer
     * @param lastName { string | null }The last name of the developer
     */
    constructor(firstName, lastName)  {
        this.#firstName = firstName?.trim() || '';
        this.#lastName = lastName?.trim() || '';
    }

    /**
     * Provides the first name of the developer
     * @returns {string} The first name of the developer
     */
    get firstName() { return this.#firstName; }
    /**
     * Provides the last name of the developer
     * @returns {string} The last name of the developer
     */
    get lastName() { return this.#lastName; }

    /**
     * Returns the full name of the developer
     * @returns {string} The full name of the developer, or 'Unknown' if either name is missing
     */
    get fullName() {
        return this.#firstName && this.#lastName
            ? `${this.#firstName} ${this.#lastName}`
            : 'Unknown';
    }

}