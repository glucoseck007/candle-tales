// src/components/SpinnerComponent.tsx
import { JSX } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setTargetRoute } from '../../../redux/slices/loadingSlice';

const SpinnerComponent = (): JSX.Element | null => {
    const isLoading = useAppSelector((state) => state.loading.isLoading);
    const targetRoute = useAppSelector((state) => state.loading.targetRoute);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoading && targetRoute) {
            const timer = setTimeout(() => {
                navigate(targetRoute);
                // Sau khi điều hướng, xóa targetRoute để không lặp lại
                dispatch(setTargetRoute(null));
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [isLoading, targetRoute, navigate, dispatch]);

    if (!isLoading) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(56, 55, 55, 0.8)',
                zIndex: 9999,
            }}
        >
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
};

export default SpinnerComponent;
