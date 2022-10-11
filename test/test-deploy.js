const { ethers, run } = require("hardhat")
const { assert, expect } = require("chai")

// describe("SimpleStorage", () {
// both are same thing
describe("SimpleStorage", () => {
    // what to do before each of our `its`
    let simpleStorageFactory, simpleStorage
    beforeEach(async function () {
        // getting smart contract
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        // deploying the smart contract
        simpleStorage = await simpleStorageFactory.deploy()
    })
    // actual place where we write our code to test our smart contract code
    it("should start with a favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        // assert
        // expect
        // assert compare two values and give a boolean
        assert.equal(currentValue.toString(), expectedValue)
    })

    it("should update when we call store", async function () {
        const expectedValue = "7"
        const transcationResponse = await simpleStorage.store(expectedValue)
        await transcationResponse.wait(1)

        const currentValue = await simpleStorage.retrieve()
        assert.equal(currentValue.toString(), expectedValue)
        // expect(currentValue.toString()).to.equal(expectedValue);
    })
})
