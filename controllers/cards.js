const axios = require('axios');
const url = 'https://random-data-api.com/api/v2/credit_cards?size=100';

const filterCards = async (req, res) => {
    const {data} = await axios.get(url);
    const cards = data.map(card => {
        delete card.credit_card_number;
        return card;
    });
    const visaCards = cards.filter(card => card.credit_card_type === 'visa');
    return res.status(200).json({visaCards});
};

module.exports = {
    filterCards
};