CREATE TYPE public.search_status AS ENUM (
    'none',
    'searching',
    'error',
    'done'
);


ALTER TYPE public.search_status OWNER TO postgres;


CREATE TABLE public.search_engine_config (
    id text NOT NULL,
    name text NOT NULL,
    api_key text,
    max_results integer DEFAULT 5 NOT NULL,
    extract_keywords boolean DEFAULT false NOT NULL,
    is_active boolean DEFAULT false NOT NULL
);


ALTER TABLE public.search_engine_config OWNER TO postgres;


ALTER TABLE public.chats
ADD COLUMN search_enabled boolean DEFAULT false;


ALTER TABLE public.messages
ADD COLUMN search_enabled boolean DEFAULT false,
ADD COLUMN web_search json,
ADD COLUMN search_status public.search_status DEFAULT 'none'::public.search_status NOT NULL;