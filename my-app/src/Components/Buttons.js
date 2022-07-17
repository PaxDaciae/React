import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    
    return <button onClick = {onClick} style ={{ backgroundColor: color }} className = 'button'>
        { text }
    </button>
} 


Button.defaultProps = {
    color: 'gray'
}

Button.defaultProps = {
    onClick: () => {console.log('Undefined click')}
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button