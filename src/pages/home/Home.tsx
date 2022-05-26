import { Inner, Form, LogoWrapper, Input } from "./HomeStyles";
import Logo from "../../components/Logo/Logo";
import { Button } from "../../components/Button/Button";
import { Container, Wrapper } from "../../components/Container/Container";

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { setAuth } from "../../store/actions/user";
import {Link, useNavigate} from "react-router-dom";
import {history} from "../../store";
import Albums from "../albums/Albums";

const Home = () => {
    const [login, setLogin] = useState<string>("kirill");
    const [password, setPassword] = useState<string>("12345678");
    const dispatch = useDispatch();
    const nav = useNavigate();

    const isAuth = useSelector((state: any)=> state.userReducer.isAuth)
    useEffect(()=> {
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

    return (
        <Wrapper>
            <LogoWrapper>
                <Link to="/">
                    <Logo />
                </Link>
            </LogoWrapper>
            <Container>
                <Inner>
                    <Form>
                        <Input
                            onChange={onLoginChange}
                            value={login}
                            placeholder="Login"
                            type="text"
                        />
                        <Input
                            onChange={onPasswordChange}
                            value={password}
                            placeholder="Password"
                            type="password"
                        />
                        {/*<Link style={{ width: "100%" }} href={"/albums"}>*/}
                        <Button
                            type="button"
                            onClick={() => dispatch(setAuth(login, password) as any)}
                        >Sign in</Button>
                        {/*</Link>*/}
                    </Form>
                </Inner>
            </Container>
        </Wrapper>
    );
};

export default Home;
