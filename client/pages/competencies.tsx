import { GetStaticProps, NextPage } from 'next'

const CompetenciesPage: NextPage = () => {
	return <></>
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		// const {data} = await CompetenciesService.getAllCompetencies({})
		return {
			props: {},
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

export default CompetenciesPage
