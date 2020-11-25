import mongoose from 'mongoose';

const organismSchema = new mongoose.Schema({
    organism_id: String,
    organism_name: String
});

const coexpressionSchema = new mongoose.Schema({
    id: String,
    gene_id1: String,
    gene_id2: String,
    locusTag1: String,
    locusTag2: String,
    gene_name1: String,
    gene_name2: String,
    rank: Number,
    organism: organismSchema
});

const coexpressionData = new mongoose.model('',coexpressionSchema);

export {coexpressionData};