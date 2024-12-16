export interface CurrInfoItem {
    currency: string,
    value: string,
    change: string,
}

const currInfo: CurrInfoItem[] = [
    {
        currency: 'USD MOEX',
        value: '63,52',
        change: '+0,09'
    },
    {
        currency: 'EUR MOEX',
        value: '70,86',
        change: '+0,14'
    },
    {
        currency: 'НЕФТЬ',
        value: '64,90',
        change: '+1.63%'
    },
];

export default currInfo;