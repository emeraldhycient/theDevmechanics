import { HeroSection } from "@/components/molecules";
import { Services } from "@/components/templates";
import Project from "@/components/templates/project";
import Story from '../../components/templates/story';

export default function Home() {
	return (
		<>
			<HeroSection />
			<Services />
			<Project />
			<Story />
		</>
	);
}
