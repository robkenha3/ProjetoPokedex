import { db } from '../db/connection.js'

const typeCollection = db.collection('arrayTypes');

export const TypeDAO = {
    //Get all types
    getAll: async() => {
        return (await (typeCollection.find({}).toArray())).sort((a, b) => parseInt(a.id) - parseInt(b.id));
    },

    //Get one type
    getByType: async(type) => {
        return await typeCollection.findOne({type: type});
    },

    //Insert many types
    insertMany: async(types) => {
        return await typeCollection.insertMany(types);
    },

    //Insert one type
    insert: async(type) => {
        return await typeCollection.insertOne(type);
    },

}