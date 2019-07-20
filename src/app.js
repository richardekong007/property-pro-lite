import Signin from "./components/signin.js";
import Signup from "./components/signup.js";
import PostPropertyDialog from "./components/postPropertyDialog.js";
import UpdatePropertyDialog from "./components/updatePropertyDialog.js";
import PropertyDetailDialog from "./components/propertyDetailDialog.js";
import PropertiesPage from "./components/properties.js";

class App {
    constructor (container){
        this.signin = new Signin(container);
        this.signup = new Signup(container);
        this.postPropertyDialog = new PostPropertyDialog(container);
        this.updatePropertyDialog = new UpdatePropertyDialog(container);
        this.propertyDetailDialog = new PropertyDetailDialog(container);
        this.propertiesPage = new PropertiesPage(container);
    }

    init (){
        this.signin.render();
        this.addEventListener();
    }

    addEventListener(){
        this.signinEvents();
        this.signupEvents();
        this.propertiesTemplateEvent();
        this.propertyDetailDialogEvent();
    }

    signinEvents (){
        
        this.signin.on("signin", data =>{
            alert(`${data.first_name} signed in.`);
            this.propertiesPage.render()
        });
        this.signin.on("error", error =>{
            alert(error);
        })
        this.signin.on("signup", () => this.signup.render());
    }

    signupEvents (){
        this.signup.on("signin_click", () => this.signin.render());
        this.signup.on("signin", () => this.signin.render());
    }

    propertiesTemplateEvent (){
        this.propertiesPage.on("add_button_click", () => {
            this.postPropertyDialog.show();
        });
        this.propertiesPage.on("property_item_click", () =>{
            this.propertyDetailDialog.show();
        });
    }

    propertyDetailDialogEvent (){
        this.propertyDetailDialog.on("edit_property", () =>{
            this.updatePropertyDialog.show();
            this.propertyDetailDialog.dismiss();
        });
    }

}

export default App;