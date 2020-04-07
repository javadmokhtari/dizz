import Head from 'next/head'
import {connect, useSelector, useDispatch, useStore} from 'react-redux'
import * as actionCreators from '../../redux/actions/creators/creators'


function Home(props) {

  // props.dispatch is accessible
  let choices = useSelector(state => state.temp.choices)
  let currentStep = useSelector(state => state.temp.currentStep)

  const dispatch = useDispatch()
  // hint: use useCallback with useDispatch to memoize it and prevent unnecessary renders from childs

  // console.log(props)

  const store = useStore()
  console.log(store)

  

  return (
    <div>
      <Head>
        <title>DIZZ</title>
      </Head>
      <div>
        <h1>Welcome To Dizz!</h1>
        <h2>Smart Programming Language suggestion app</h2>
        <p>Current Step: {currentStep}</p>
        <p onClick={() => dispatch(actionCreators.goNextStep())}>Go Next Step</p>
        <p onClick={() => dispatch(actionCreators.goPreviousStep())}>Go Previous Step</p>
        <p onClick={() => dispatch(actionCreators.dummyAddChoice('test'))}>Add your choice</p>

        <p>Number of added choices: {choices.length}</p>
      </div>
    </div>
  );
  
}


// const mapStateToProps = state => {
//   // state.REDUCER_NAME.PROPERTY_NAME
//   return {
//     currentStep: state.temp.currentStep,
//     choices: state.temp.choices }
// }

// const mapDispatchToProps = {
//   goNextStep: () => actionCreators.goNextStep(),
//   goPreviousStep: () => actionCreators.goPreviousStep(),
//   dummyAddChoice: (choice) => actionCreators.dummyAddChoice(choice)
// }
  

export default (Home)
