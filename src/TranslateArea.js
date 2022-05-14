import React from 'react';

const TranslateArea = (props) => {
    return (
        <div className='translate-area' style={{display: 'flex', justifyContent: 'center'}}>
            <form onSubmit={props.translateBook} action=''>
                <select onChange={props.setLanguage}>
                    <option selected value="en">English</option>
                    <option value="nl">Dutch</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="it">Italian</option>
                    <option value="ja">Japanese</option>
                    <option value="es">Spanish</option>
                </select>
                <button type='submit'>Translate</button>
            </form>
        </div>
    )
}

export default TranslateArea;