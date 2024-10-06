const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../../app");
const api = supertest(app);
const User = require("../../Models/userModel");
const Product = require("../../Models/productModel");

const UserMocks = require("../MockData/MOCK_DATA_USER.json")
const ProductMocks = require("../MockData/MOCK_DATA_PRODUCT.json")

beforeAll(async () => {
    await User.deleteMany({});
    await Product.deleteMany({});
    await User.insertMany(UserMocks);
    await Product.insertMany(ProductMocks);
}
)
describe("Products API", function () {
    describe("GET /products", function () {
        describe("when fetching all products", function () {
            it("should return all products", async function () {
                const response = await api.get("/api/products");
                expect(response.body).toHaveLength(ProductMocks.length);
            });

            it("should return products in JSON format", async function () {
                await api
                    .get("/api/products")
                    .expect(200)
                    .expect("Content-Type", /application\/json/);
            });

            it("should return a limited number of products when 'number' query parameter is provided", async function () {
                const limit = 3;
                const response = await api.get(`/api/products?number=${limit}`);
                expect(response.body).toHaveLength(limit);
            });
        });
    });

    describe("GET /products/:productID", function () {
        describe("when fetching a specific product", function () {
            it("should return a product by its ID", async function () {
                const productToFind = await Product.findOne({});
                const response = await api
                .get(`/api/products/${productToFind._id}`)
                .expect(200)
                expect(response.body).toEqual(JSON.parse(JSON.stringify(productToFind)));
            });

            it("should return 404 if the product is not found", async function () {
                const invalidID = "6702437e3a61345c7ea50e02"
                await api
                .get(`/api/products/${invalidID}`)
                .expect(404)
            });

            it("should return 400 if the ProductID is invalid", async function () {
                const invalidID = "lol"
                await api
                .get(`/api/products/${invalidID}`)
                .expect(400)
            });
        });
    });

    describe("POST /products", function () {
        beforeAll(() =>
            {
                Product.deleteMany({});
            })
        describe("when creating a product", function () {
            it("should create a new product and return 201 status", async function () {
                const productToAdd = ProductMocks[0];
                const user = await User.findOne({accountType: 1}).select('_id');
                productToAdd.vendorID = user._id;
                const response = await api
                .post(`/api/products`)
                .send(productToAdd)
                .expect(201)
                expect(response.body.vendorID).toContain(productToAdd.vendorID.toString())
            });

            it("should return 403 if the user is not a vendor", async function () {
                const productToAdd = ProductMocks[0];
                const user = await User.findOne({accountType: 0}).select('_id');
                productToAdd.vendorID = user._id;
                await api
                .post(`/api/products`)
                .send(productToAdd)
                .expect(403)
            });
        });
    });

    describe("PUT /products/:productID", function () {
        describe("when updating a product", function () {
            it("should update an existing product and return the updated product", async function () {
                const productToModify = await Product.findOne();
                const edit = 
                {
                    name: "Banana",
                    description : "Banana"
                }
                const response = await api
                .put(`/api/products/${productToModify._id}`)
                .send(edit)
                .expect(200)
                expect(response.body.name).toEqual("Banana")
            });

            it("should return 404 if the product is not found", async function () {
                const invalidID = "6702437e3a61345c7ea50e02"
                await api 
                .put(`/api/products/${invalidID}`)
                .expect(404)
            });
        });
    });

    describe("DELETE /products/:productID", function () {
        describe("when deleting a product", function () {
            it("should delete a product and return success message", async function () {
                const productToDelete = await Product.findOne();
                await api
                .put(`/api/products/${productToDelete._id}`)
                .expect(200)
                expect(Product.find({}.length == 0))
            });

            it("should return 404 if the product is not found", async function () {
                const invalidID = "6702437e3a61345c7ea50e02"
                await api 
                .delete(`/api/products/${invalidID}`)
                .expect(404)
            });
        });
    });
    describe("POST /products/:productID/comment", function () {
        describe("when adding a comment to a product", function () {
            it("should add a comment and return success message", async function () {
                const productToComment = await Product.findOne({});
                const productID = productToComment._id;
                const user = await User.findOne()
                const userID = user._id;
                const comment = 
                {
                    userID: userID,
                    rating: 5,
                    comment:"Shit product.",
                    date: "04.01.1994"
                }
                await api
                .post(`/api/products/${productID}/comments`)
                .send(comment)
                .expect(200)
            });
        });
    });

    describe("DELETE /products/:productID/comment", function () {
        describe("when deleting a comment from a product", function () {
            it("should delete the comment and return success message", async function () {
                const productToComment = await Product.findOne({
                    reviewList:{$ne:[]}
                });
                const productID = productToComment._id;
                const comment = productToComment.reviewList[0];
                const commentID = comment._id;
                console.log(commentID);
                await api
                .delete(`/api/products/${productID}/comments`)
                .send({ deleteReviewID: commentID })
                .expect(200)
            });

            it("should return 404 if the comment is not found", async function () {
                const invalidID = "6702437e3a61345c7ea50e02";
                const product = await Product.findOne();
                const productID = product._id;
                await api 
                .delete(`/api/products/${productID}/comments`)
                .send({ deleteReviewID: invalidID })
                .expect(404)
            });
        });
    });
});




afterAll(async () => {
    await User.deleteMany({});
    await Product.deleteMany({});
})
