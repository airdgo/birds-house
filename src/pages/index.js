import Layout from "../layout/Layout";
import { Landing, HomeBrake, Rooms } from "../sections";

export default function Index() {
	return (
		<Layout>
			<Landing />
			<HomeBrake />
			<Rooms />
		</Layout>
	);
}
