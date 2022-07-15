import {Inner, Form, LogoWrapper, Input} from "./HomeStyles";
import Logo from "../../components/Logo/Logo";
import {Container, Wrapper} from "../../components/Container/Container";

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setAuthData, setLoading} from "../../store/actions/user";
import {Link, useNavigate} from "react-router-dom";
import TokensLocalStorage from "../../utils/local-storage/TokensLocalStorage";
import {AppDispatch} from "../../App";
import ButtonShared from "../../components/ButtonShared/ButtonShared";

const Home = () => {
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const dispatch = useDispatch<AppDispatch>();
    const nav = useNavigate();
    const isAuth = useSelector((state: any) => state.userReducer.isAuth)
    const error = useSelector((state: any) => state.userReducer.error)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
            if (TokensLocalStorage.getInstance().getUser() !== null) {
                nav('albums')
            }
            if (isAuth) {
                nav('albums');
            }
        }
    )

    const onLoginChange = (e: React.FormEvent<HTMLInputElement>) => {
        setLogin(e.currentTarget.value);
    };

    const onPasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    };

    const onSignInClick = async () => {
        setIsLoading(true)
        await dispatch(setAuthData(login, password))
        setIsLoading(false)
    }
    return (
        <Wrapper>
            <LogoWrapper>
                <Link to="/">
                    <Logo/>
                </Link>
            </LogoWrapper>
            <Container>
                <Inner>
                    <Form>
                        {error ? 'incorrect username or password' : null}
                        <Input
                            onChange={onLoginChange}
                            value={login}
                            placeholder="Login"
                            type="text"
                            onKeyPress={(e: any) => e.key === "Enter" ? dispatch(setAuthData(login, password)) : null}
                        />
                        <Input
                            onChange={onPasswordChange}
                            value={password}
                            placeholder="Password"
                            type="password"
                            autocomplete="on"
                            onKeyPress={(e: any) => e.key === "Enter" ? dispatch(setAuthData(login, password)) : null}
                        />
                        <ButtonShared
                            margin='20px 0 0'
                            type="button"
                            isLoading={isLoading}
                            onClick={onSignInClick}
                        >Sign in</ButtonShared>
                    </Form>
                </Inner>
            </Container>
        </Wrapper>
    );
};

export default Home;
