/* eslint-disable react/prop-types */
import ButtonLink from "../UI/ButtonLink";

const ResumeButton = ({ className, bgColor }) => {
	return (
		<ButtonLink href="https://bit.ly/Jatin-Rohilla-Resume" innerClassName={className} bgColor={bgColor}>
			Resume
		</ButtonLink>
	);
};

export default ResumeButton;
