import React from 'react'

import "./ProjectPanel.css"
import '../../bootstrap.css';

import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';


import Sidebar from '../../components/Sidebar/Sidebar';

import sidebarData from '../../data/ProjectPanelSidebarData';

import projectLogo from "../../assets/images/projectLogo.png"




const ProjectPanel = () => {
	const [activeTab, setActiveTab] = React.useState(sidebarData[0])
	
	
	return (
	<div className="ProjectPanel">

		<Sidebar
			header={"Project Panel"}
			headerIcon={faScrewdriverWrench}
			items={sidebarData}
			activeItem={activeTab}
			setActiveItem={setActiveTab}
		/>

		<div className="right">

			<nav className="project-navbar">
				<img className="project-logo" src={projectLogo} alt="project logo" />
				<span className="project-name">OmniTalk</span>
			</nav>

			<div className="tab-content">
				<activeTab.Component />
			</div>
		</div>

		


		

	</div>

	

		
		
	)
}

export default ProjectPanel