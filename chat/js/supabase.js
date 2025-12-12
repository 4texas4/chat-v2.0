// js/supabase.js
// Creates a global `supabase` client like your original file did.
// Note: this file assumes the UMD build for supabase-js is loaded (see room.html).
(function () {
  // Keep your same URL and anon key (copied from the original)
  const supabaseUrl = "https://bsogmqsbopoagtkaudya.supabase.co";
  const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzb2dtcXNib3BvYWd0a2F1ZHlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NzAzNjUsImV4cCI6MjA2NzA0NjM2NX0.GXM5rI2EGn4_wt1rcLEJEmdo8akzKNsrZKEolSHW6FU";

  // UMD exposes a global `supabaseJs` or `supabase` depending on the build.
  // The jsDelivr UMD commonly exposes `supabase`.
  const createClient = (window.supabase && window.supabase.createClient) || (window.supabaseJs && window.supabaseJs.createClient);

  if (!createClient) {
    console.error("Supabase UMD not found. Make sure you loaded the @supabase/supabase-js UMD before this file.");
    return;
  }

  // create client and expose globally
  window.supabase = createClient(supabaseUrl, supabaseAnonKey);
})();
