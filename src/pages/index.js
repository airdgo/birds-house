import Layout from "../layout/Layout";
import {
	Landing,
	HomeBrake,
	Rooms,
	RoomsBrake,
	Activities,
	ActivitiesBrake,
	Location,
} from "../sections";

export default function Index() {
	return (
		<Layout>
			<Landing />
			<HomeBrake />
			<Rooms />
			<RoomsBrake />
			<Activities />
			<ActivitiesBrake />
			<Location />
		</Layout>
	);
}
