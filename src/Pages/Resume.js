import React from 'react';

import { Profile } from '../Components/Profile';
import { Academic } from '../Components/Academic';
import { Skills } from '../Components/Skills';
import { Projects } from '../Components/Projects';
import { Works } from '../Components/Works';
import { SocialMedia } from '../Components/SocialMedia';
import { SEO } from '../Components/SEO';

import { Data as dataSchema } from '../Schemas/Data';

export const Resume = () => {
	const { profile, skills, socialMedia, experience } = dataSchema;

	return (
		<>
			<SEO {...profile} />
			<main className='l-main bd-container' id='bd-container'>
				<div className='resume' id='area-cv'>
					<div className='resume__left'>
						<Profile {...profile} />
						<Skills {...skills} />
						<SocialMedia {...socialMedia} />
					</div>
					<div className='resume__right'>
						<Works {...experience} />
						<Academic {...experience} />
						<Projects {...experience} />
					</div>
				</div>
			</main>
		</>
	);
};
