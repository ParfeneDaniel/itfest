import Header from "../components/Header"
import Input from "../components/Input"
import SideNav from "../components/SideNav"

const CreatePost = () => {
  return (
    <>
        <Header type={"student"}/>
        <SideNav subjects={["LFTA", "CDI"]}/>
        <div id="dashboard">
            <div>
                <Input type="textarea" />
            </div>
        </div>
    </>
  )
}

export default CreatePost