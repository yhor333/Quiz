import React, {Component} from 'react';
import MenuTooggle from '../components/Navigation/MenuToggle/MenuTooggle';
import './Layout.css';
import Drower from '../components/Navigation/Drower/Drower'

class Layout extends Component {

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    render() {
        return (
            <div className='layout'>

                <Drower 
                    isOpen={this.state.menu}
                    onClose={this.toggleMenuHandler}
                />

                <MenuTooggle 
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                > 
                    
                </MenuTooggle>
                <main>
                    { this.props.children }
                </main>
            </div>
        )
    }
}

export default Layout