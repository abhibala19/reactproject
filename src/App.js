import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import StlyeSheet from './components/StyleSheet'
import Inline from './components/Inline'
import './appStyle.css'
import styles from './appStyle.module.css'
import Form from './components/Form'
import LifeCycleA from './components/LifeCycleA'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import PureComponents from "./components/PureComponents"
import ParentComp from './components/ParentComp'
import RefDemo from './components/RefDemo'
import Input from './components/Input'
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './ErrorBoundary';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import ClickCounter1 from './ClickCounter1';
import HoverCounterTwo from './HoverCounterTwo';
import User from './User';
import Counter from './Counter';
import ComponentC from './ComponentC';
import { UserProvider } from './userContext';


function App() {
  return (

    <div className="App">
      <UserProvider value="abhinaya">
      <ComponentC/>
      </UserProvider>




{/* <Counter render={(count, incrementCount) => ( 
<ClickCounter1 count={count} incrementCount={incrementCount}/>)}/>

<Counter render={(count, incrementCount) => ( 
<HoverCounterTwo count={count} incrementCount={incrementCount}/>)}/> */}
      {/* <User render={ (isLocked) => isLocked?"abhinaya":"guest" }/> */}
      {/* <ClickCounter1/>
      <HoverCounterTwo/> */}
{/* <ClickCounter name="abhinaya"/>
<HoverCounter/> */}


      {/* <ErrorBoundary>
      <Hero heroName="batman"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="superman"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="joker"/>
      </ErrorBoundary> */}
      {/* <PortalDemo/> */}
      {/* <Input/> */}
      {/* <FocusInput/> */}
      {/* <FRParentInput/> */}

      {/* <RefDemo/> */}


      {/* <ParentComp/> */}

      {/* <FragmentDemo/>
      <Table/> */}

      {/* <LifeCycleA/>
      <Form/> */}

      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}> Success</h1> */}
      {/* <Inline/>
      <StlyeSheet primary={true} /> */}
      {/* <NameList/>
      <UserGreeting/> */}
      {/* <ParentComponent/>
      <EventBind/> */}
      {/* <ClassClick/>
      <FunctionClick/> */}
      {/* <Greet/>
      <Welcome/> */}
    </div>
  );
}

export default App;
