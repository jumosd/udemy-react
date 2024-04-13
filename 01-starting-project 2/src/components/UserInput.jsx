

const UserInput = ({ userInput, onChange }) => {


    return (
        <section id='user-input'>
            <div className='input-group'>
                <p>
                    <label htmlFor="">초기 투자금액</label>
                    <input type="number" required
                        onChange={(e) => { onChange('initialInvestment', e.target.value) }}
                        value={userInput.initialInvestment} />
                </p>
                <p>
                    <label htmlFor="">연간 투자액</label>
                    <input type="number" required
                        onChange={(e) => { onChange('annualInvestment', e.target.value) }}
                        value={userInput.annualInvestment} />
                </p>
            </div>
            <div className='input-group'>
                <p>
                    <label htmlFor="">에상 수익율</label>
                    <input type="number" required
                        onChange={(e) => { onChange('expectedReturn', e.target.value) }}
                        value={userInput.expectedReturn} />
                </p>
                <p>
                    <label htmlFor="">투자 기간</label>
                    <input type="number" required
                        onChange={(e) => { onChange('duration', e.target.value) }}
                        value={userInput.duration} />
                </p>
            </div>
        </section>
    );
};

export default UserInput;