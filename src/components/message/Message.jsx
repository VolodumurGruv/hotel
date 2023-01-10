import { message } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToDefault } from "../../features/slices/messageSlice";

const Message = () => {
	const [messageApi, contextHolder] = message.useMessage();
	const { isMessage, isError, msg } = useSelector((state) => state.message);
	const dispatch = useDispatch();

	useEffect(() => {
		if (isMessage) {
			messageApi.open({
				type: isError ? "error" : "success",
				content: msg,
			});
			dispatch(setToDefault());
		}
	}, [isMessage]);

	return <>{contextHolder}</>;
};

export default Message;
