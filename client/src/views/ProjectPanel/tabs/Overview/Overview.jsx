import React from 'react'

import "../../../../components/ProjectPanelCards/CardCommonStyles.css"

import ProjectTitleCard from '../../../../components/ProjectPanelCards/ProjectTitleCard/ProjectTitleCard'
import TextInfoCard from '../../../../components/ProjectPanelCards/TextInfoCard/TextInfoCard'
import TagsCard from '../../../../components/ProjectPanelCards/TagsCard/TagsCard'
import LinksCard from '../../../../components/ProjectPanelCards/LinksCard/LinksCard'
import MembersCard from '../../../../components/ProjectPanelCards/MembersCard/MembersCard'


import project from '../../../../data/ProjectPanelDummyData'

import { faCircleQuestion, faHashtag, faLightbulb, faLink, faPeopleGroup, faTags, faToolbox } from '@fortawesome/free-solid-svg-icons'


const Overview = () => {
	const [projectData, setProjectData] = React.useState(project)


	return (
		<div className="container-fluid p-0">
			<div className="row">
				<div className="col-12 mb-4">
					<ProjectTitleCard 
						projectData={projectData}
						setProjectData={setProjectData}
						editable={true}
					/>
				</div>

				<div className="col-9 ps-0">
					<div className="d-flex flex-column gap-4">

						<div className="row">
							<div className="col">
								<TextInfoCard 
									projectData={projectData}
									setProjectData={setProjectData}
									cardInfo = {{
										title : "Problem Statement",
										icon : faCircleQuestion,
										color : "#242d49"
									}}
									propertyName="problemStatement"
									editable={true}
								/>
							</div>
							<div className="col">
								<TextInfoCard 
									projectData={projectData}
									setProjectData={setProjectData}
									cardInfo = {{
										title : "Idea",
										icon : faLightbulb,
										color : "#242d49",
									}}
									propertyName="idea"
									editable={true}
								/>
							</div>
						</div>

						<div className="row">
							<div className="col-7">
								<LinksCard
									projectData={projectData}
									setProjectData={setProjectData}
									cardInfo={{
										title : "Project Links",
										icon : faLink,
										color : "#242d49"
									}}
									propertyName="links"
									editable={true}
								/>
							</div>

							<div className="col-5">
								<div className="d-flex flex-column gap-4">
									<TagsCard
										projectData={projectData}
										setProjectData={setProjectData}
										cardInfo={{
											title : "Domain",
											icon : faHashtag,
											color : "#00afff"
										}}
										propertyName="domain"
										editable={true}
									/>
									<TagsCard
										projectData={projectData}
										setProjectData={setProjectData}
										cardInfo={{
											title : "Tags",
											icon : faTags,
											color : "#ff7206"
										}}
										propertyName="areas"
										editable={true}
									/>
									<TagsCard
										projectData={projectData}
										setProjectData={setProjectData}
										cardInfo={{
											title : "Tools & Tech",
											icon : faToolbox,
											color : "#00c672"
										}}
										propertyName="techStack"
										editable={true}
									/>

								</div>
							</div>

						</div>

					</div>
				</div>

				<div className="col-3 ps-0">
					<div className="d-flex flex-column gap-3">
							<MembersCard
								projectData={projectData}
								setProjectData={setProjectData}
								cardInfo={{
									title : "Members",
									icon : faPeopleGroup,
									color : "#242d49"
								}}
								propertyName="techStack"
								editable={true}
							/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Overview