const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTY4MDU5MiwiZXhwIjoxOTU1MjU2NTkyfQ.SlBSAk8a8eSAG-ItJY9WTSoD4r7Gzkmug8nwipl_W4g';

const SUPABASE_URL = 'https://svsgcwfpfpqmbyumootr.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

//export async function getUser() {
 //   return client.auth.user();
//}

export function checkLoggedIn() {
    if (!client.auth.session()) {
        window.location = '../';
    }
}

export async function signUp(email, password) {
    const response = await client.auth.signUp({
        email,
        password
    });
    
    return response.user;
}

export async function signIn(email, password) {
    const response = await client.auth.signIn({
        email,
        password
    });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return window.location.href = '../';
}

export async function savePoll(question, optionA, optionB, votesA, votesB) {
    const response = await client
        .from('polls')
        .insert([
            {
                question: question,
                option_a: optionA,
                option_b: optionB,
                votes_a: votesA,
                votes_b: votesB,
                user_id: client.auth.user().id,
            }
        ]);
    return response.data;
}


export async function getPastPolls() {
    const response = await client
        .from('polls')
        .select();
    
    return response.data;
    //return client.auth.session();
}