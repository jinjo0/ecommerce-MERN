import React,{useState} from 'react'
import {Form, Button, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from "../FormContainer"
import {savePaymentMethod}from "../../actions/cartActions"
import CheckoutSteps from "../CheckoutSteps"

const PaymentScreen = ({history}) => {

    const dispatch = useDispatch()

    const  cart = useSelector(state=> state.cart)
    const {shippingAddress} = cart
    if(!shippingAddress){
        history.push('/shipping')
    }
    const [paymentMethod, setPaymentMethod] = useState('Paypal')


    const submitHandler= (e) =>{
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }
    return (
        <FormContainer>
            <CheckoutSteps  step1 step2 step3/>
            <h1> Payment Method</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>
                            Select Method
                    </Form.Label>
                    <Col>
                    <Form.Check 
                        type='radio' 
                        label='Paypal or credit Card' 
                        id='Paypal'
                        name='paymentMethod'
                        value='Paypal'
                        checked onChange={(e)=>setPaymentMethod(e.target.value)}
                        >
                    </Form.Check>      
                </Col>
                </Form.Group>
            
                <Button type="submit" variant="primary">
                    Continue
                </Button>
            </Form>
        </FormContainer>
    )
}

export default PaymentScreen
