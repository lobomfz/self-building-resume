import React from 'react';

export const Skills = ({ softLabel, softSkills }) => {
	return (
		<section className='soft-skills section'>
			<h2 className='section-title'>{softLabel}</h2>
			<div className='skills__content bd-grid'>
				<ul className='skills__data'>
					{softSkills.map((skill) => (
						<Skill key={skill} skill={skill} />
					))}
				</ul>
			</div>
		</section>
	);
};

const Skill = ({ skill }) => (
	<li className='skills__name'>
		<span className='skills__circle' /> {skill}
	</li>
);
