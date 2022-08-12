import Layout from "../layout/Layout";
import { Landing, HomeBrake, Rooms, RoomBrake } from "../sections";

export default function Index() {
	return (
		<Layout>
			<Landing />
			<HomeBrake />
			<Rooms />
			<RoomBrake />
		</Layout>
	);
}
