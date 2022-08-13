import Layout from "../layout/Layout";
import { Landing, HomeBrake, Rooms, RoomsBrake, Activities } from "../sections";

export default function Index() {
	return (
		<Layout>
			<Landing />
			<HomeBrake />
			<Rooms />
			<RoomsBrake />
			<Activities />
		</Layout>
	);
}
