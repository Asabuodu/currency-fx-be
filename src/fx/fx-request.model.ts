import * as mongoose from 'mongoose';

const ConversionRequestSchema = new mongoose.Schema({
  sourceCurrency: String,
  destinationCurrency: String,
  amount: Number,
  timestamp: { type: Date, default: Date.now },
});

const ConversionRequestModel = mongoose.model('ConversionRequest', ConversionRequestSchema);

export default ConversionRequestModel;
