const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTY4MDU5MiwiZXhwIjoxOTU1MjU2NTkyfQ.SlBSAk8a8eSAG-ItJY9WTSoD4r7Gzkmug8nwipl_W4g';

const SUPABASE_URL = 'https://svsgcwfpfpqmbyumootr.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


export async function signUp(email, password) {
    const response = await client.auth.signUp({
        email,
        password
    });

    return response;
}

export async function signIn(email, password) {
    const response = await client.auth.signIn({
        email,
        password
    });

    return response;
}

export async function savePoll(question, option1, option2, votes1, votes2) {
    const response = await client
        .from('polls')
        .insert([{
            question: question,
            option_1: option1,
            option_2: option2,
            votes_1: option1,
            votes_2: votes2
        }
        ]);
    return response;
}


export async function getPastPolls() {
    const response = await client
        .from('polls')
        .select();
    
    return response.data;
}