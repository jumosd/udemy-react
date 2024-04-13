import { calculateInvestmentResults, formatter } from '../util/investment.js'

const Results = ({ input }) => {
    const resultData = calculateInvestmentResults(input)
    console.log(resultData)
    const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment

    return (
        <table id='result'>
            <thead>
                <tr>
                    <td>year</td>
                    <td>Investment Value</td>
                    <td>Interest</td>
                    <td>Total Interrest</td>
                    <td>Invested Capital</td>
                </tr>
            </thead>
            <tbody>
                {resultData.map((yearData) => {
                    const totalInvestment = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                    const totalAmountInvested = yearData.valueEndOfYear - totalInvestment
                    return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInvestment)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )
                })}


            </tbody>
        </table>
    );
};

export default Results; 