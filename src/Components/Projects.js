import React from 'react';
import ShowBuildNumber from './BuildNumber';

export const Projects = ({ projects }) => {
	return (
		<section className='projects-experience section' id='projects'>
			<h2 className='section-title'>Projects</h2>

			<div className='experience__container bd-grid'>
				{projects.map((project) => (
					<Project key={project.company} {...project} />
				))}
				<ShowBuildNumber />
			</div>
		</section>
	);
};

const Project = ({ name, period }) => {
	return (
		<div className='experience__content'>
			<div className='experience__time'>
				<span className='experience__rounder'></span>

				<span className='experience__line'></span>
			</div>
			<div className='experience__data bd-grid'>
				<h3 className='experience__title'>{name}</h3>

				<span className='experience__project'>{period}</span>
			</div>
		</div>
	);
};
