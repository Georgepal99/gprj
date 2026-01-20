--
-- PostgreSQL database dump
--

\restrict F6WDeVVeL5k669LcxYxgCTXpwFDzJhbbAa1e8dcfYJgHNLXjr3cb8chOWXveVmD

-- Dumped from database version 18.1
-- Dumped by pg_dump version 18.1

-- Started on 2026-01-19 20:04:42

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 219 (class 1259 OID 16388)
-- Name: customers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customers (
    id integer NOT NULL,
    firstname character varying(100),
    lastname character varying(100),
    phone character varying(30),
    email character varying(100),
    address character varying(200),
    city character varying(200),
    afm character varying(9)
);


ALTER TABLE public.customers OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16394)
-- Name: customers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.customers ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.customers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 221 (class 1259 OID 16395)
-- Name: history; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.history (
    id integer NOT NULL,
    datetime timestamp with time zone,
    comtype character varying(200),
    comstate character varying(200),
    typehistory character varying(200),
    title character varying(200),
    description text,
    id_customer integer
);


ALTER TABLE public.history OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16401)
-- Name: history_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.history ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.history_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 223 (class 1259 OID 16402)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(200),
    password character varying(100),
    fullname character varying(200)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 16408)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 4912 (class 0 OID 16388)
-- Dependencies: 219
-- Data for Name: customers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customers (id, firstname, lastname, phone, email, address, city, afm) FROM stdin;
1	Manos	Pappas	2610432233	m@p.gr	A1	Patras	293874922
2	George	Paloumpis	6943831656	georgepal99@gmail.com	Navarinou 72-74	Patras	333333333
\.


--
-- TOC entry 4914 (class 0 OID 16395)
-- Dependencies: 221
-- Data for Name: history; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.history (id, datetime, comtype, comstate, typehistory, title, description, id_customer) FROM stdin;
1	2026-01-18 19:57:22.541331+02	ORDER	PENDING	MEETING	test1	test 1	1
2	2026-01-18 19:58:08.765145+02	COMPLAIN	PENDING	EMAIL	Den doulevei to mail	problima sto mail	1
3	2026-01-18 20:11:03.760156+02	ORDER	PENDING	MEETING	nea agora	nea agora	2
\.


--
-- TOC entry 4916 (class 0 OID 16402)
-- Dependencies: 223
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, password, fullname) FROM stdin;
1	admin@admin.gr	$2a$10$st5bPrFM25NGe3yPzhXWxuSDEW1ZLil3nwURfhRTk8EVr0.aEs5/y	Γιωργος
\.


--
-- TOC entry 4923 (class 0 OID 0)
-- Dependencies: 220
-- Name: customers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.customers_id_seq', 2, true);


--
-- TOC entry 4924 (class 0 OID 0)
-- Dependencies: 222
-- Name: history_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.history_id_seq', 3, true);


--
-- TOC entry 4925 (class 0 OID 0)
-- Dependencies: 224
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


-- Completed on 2026-01-19 20:04:43

--
-- PostgreSQL database dump complete
--

\unrestrict F6WDeVVeL5k669LcxYxgCTXpwFDzJhbbAa1e8dcfYJgHNLXjr3cb8chOWXveVmD

