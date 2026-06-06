const fs = require('fs');

try {
  let content = fs.readFileSync('index.php', 'utf8');

  // Regex replacements using IDs added to the React components
  // The structure looks for any tag with the specific ID and replaces its contents or the whole tag.

  // 1. Hero Tagline
  content = content.replace(
    /(<[^>]*id="cms-hero-tagline"[^>]*>)([\s\S]*?)(<\/[^>]+>)/i,
    `$1\n<?php if(!empty($data["hero"])): echo htmlspecialchars($data["hero"]["tagline"] ?? ""); else: ?>$2<?php endif; ?>\n$3`
  );

  // 2. Hero Headline
  content = content.replace(
    /(<[^>]*id="cms-hero-headline"[^>]*>)([\s\S]*?)(<\/[^>]+>)/i,
    `$1
      <?php if(!empty($data['hero'])): ?>
        <?php echo htmlspecialchars($data['hero']['headlinePart1'] ?? ''); ?><br/>
        <span class="text-primary"><?php echo htmlspecialchars($data['hero']['headlineHighlight'] ?? ''); ?></span><br/>
        <?php echo htmlspecialchars($data['hero']['headlinePart2'] ?? ''); ?>
      <?php else: ?>
        $2
      <?php endif; ?>
    $3`
  );

  // 3. Hero Subtext
  content = content.replace(
    /(<[^>]*id="cms-hero-subtext"[^>]*>)([\s\S]*?)(<\/[^>]+>)/i,
    `$1\n<?php if(!empty($data['hero'])): echo htmlspecialchars($data['hero']['subtext'] ?? ''); else: ?>$2<?php endif; ?>\n$3`
  );

  // 4. Hero Image
  content = content.replace(
    /(<img[^>]*id="cms-hero-image"[^>]*src=")([^"]+)("[^>]*>)/i,
    `$1<?php echo !empty($data['hero']['mainImage']) ? htmlspecialchars($data['hero']['mainImage']) : '$2'; ?>$3`
  );

  // 5. Academy Subtitle
  content = content.replace(
    /(<[^>]*id="cms-academy-subtitle"[^>]*>)([\s\S]*?)(<\/[^>]+>)/i,
    `$1\n<?php if(!empty($data["academyInfo"])): echo htmlspecialchars($data["academyInfo"]["subtitle"] ?? ""); else: ?>$2<?php endif; ?>\n$3`
  );

  // 6. Academy Title
  content = content.replace(
    /(<[^>]*id="cms-academy-title"[^>]*>)([\s\S]*?)(<\/[^>]+>)/i,
    `$1\n<?php if(!empty($data["academyInfo"])): echo htmlspecialchars($data["academyInfo"]["title"] ?? ""); else: ?>$2<?php endif; ?>\n$3`
  );

  fs.writeFileSync('index.php', content, 'utf8');
  console.log('Dynamic index.php rendering applied using stable ID targeting');
} catch (error) {
  console.error('Error updating index.php:', error);
}
