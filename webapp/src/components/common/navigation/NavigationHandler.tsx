import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { setLoading } from "../../../redux/slices/loadingSlice";

const NavigationHandler: React.FC = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        // Khi location thay đổi, hiển thị spinner
        dispatch(setLoading(true));

        // Giả sử bạn có thể chờ tải xong dữ liệu hoặc chờ 500ms
        const timer = setTimeout(() => {
            dispatch(setLoading(false));
        }, 500); // Điều chỉnh thời gian chờ theo nhu cầu thực tế

        return () => clearTimeout(timer);
    }, [location, dispatch]);

    return null;
};

export default NavigationHandler;
