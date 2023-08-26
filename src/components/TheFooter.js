import { Component } from "../core/heropy";
import aboutStore from "../store/about"

export default class TheFooter extends Component {
    constructor() {
        super({
            tagName: "footer"
        })
    }
    render() {
        const {github, repository} = aboutStore.state
        this.el.innerHTML = /* html */ `
            <div>
                <a href="${repository}" target="_blank">
                    Github Repository
                </a>
            </div>
            <div>
                <a href="${github}" target="_blank">
                    ${new Date().getFullYear()}
                    SEACRAB808
                </a>
            </div>
        `
    }
}